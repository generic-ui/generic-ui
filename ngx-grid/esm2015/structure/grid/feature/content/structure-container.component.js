/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, NgZone, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest, fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { ResizeDetector } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../core/api/structure.id';
import { StructureCommandDispatcher } from '../../../core/api/structure.command-dispatcher';
import { StructureWarehouse } from '../../core/api/structure.warehouse';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { CompositionCommandInvoker } from '../../../../composition/core/api/composition.command-invoker';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { FormationWarehouse } from '../../../source/core/api/formation/formation.warehouse';
import { structureParentComponent } from '../structure-parent-component';
import { StructureVerticalFormationWarehouse } from '../../../vertical-formation/core/api/structure-vertical-formation.warehouse';
import { StyleModifier } from '../../../../common/cdk/dom/style/style-modifier';
export class StructureContainerComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elRef
     * @param {?} ngZone
     * @param {?} structureId
     * @param {?} structureCommandService
     * @param {?} structureWarehouse
     * @param {?} structureVerticalFormationWarehouse
     * @param {?} sourceWarehouse
     * @param {?} compositionCommandInvoker
     * @param {?} compositionWarehouse
     * @param {?} formationWarehouse
     * @param {?} resizeDetector
     * @param {?} structureParent
     */
    constructor(changeDetectorRef, elRef, ngZone, structureId, structureCommandService, structureWarehouse, structureVerticalFormationWarehouse, sourceWarehouse, compositionCommandInvoker, compositionWarehouse, formationWarehouse, resizeDetector, structureParent) {
        super(changeDetectorRef, elRef);
        this.elRef = elRef;
        this.ngZone = ngZone;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.structureWarehouse = structureWarehouse;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.sourceWarehouse = sourceWarehouse;
        this.compositionCommandInvoker = compositionCommandInvoker;
        this.compositionWarehouse = compositionWarehouse;
        this.formationWarehouse = formationWarehouse;
        this.resizeDetector = resizeDetector;
        this.structureParent = structureParent;
        this.columns = [];
        this.source = [];
        this.autoResizeWidthEnabled = false;
        this.scrollObservation$ = new Subject();
        this.styleModifier = new StyleModifier(this.elRef.nativeElement);
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
            console.log(containerHeight);
            this.setContainerHeight(containerHeight);
        }));
        combineLatest(this.sourceWarehouse.onEntities(), this.compositionWarehouse.onTemplateColumns())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} arr
         * @return {?}
         */
        (arr) => {
            this.source = (/** @type {?} */ (arr[0]));
            this.columns = (/** @type {?} */ (arr[1]));
            this.reRender();
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
        super.ngAfterViewInit();
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
            this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setWidth(width);
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
        this.structureWarehouse
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
        this.structureVerticalFormationWarehouse
            .onScrollBarPosition()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} scrollPosition
         * @return {?}
         */
        (scrollPosition) => {
            this.elRef.nativeElement.scrollTop = scrollPosition;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this.resizeDetector.destroy(this.elRef.nativeElement);
    }
    /**
     * @private
     * @param {?} height
     * @return {?}
     */
    setContainerHeight(height) {
        this.height = height;
        this.styleModifier.getHost().setHeight(height);
    }
    /**
     * @private
     * @param {?} topMargin
     * @param {?} sourceHeight
     * @return {?}
     */
    setSourceHeight(topMargin, sourceHeight) {
        this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setPaddingTop(topMargin);
        this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setHeight(sourceHeight);
    }
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    recalculateContainer(width) {
        if (this.autoResizeWidthEnabled) {
            this.compositionCommandInvoker.setContainerWidth(width);
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
            fromEvent(this.elRef.nativeElement, 'scroll')
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
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-container';
    }
}
StructureContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-container]',
                template: "<div #sourceCollection\n\t class=\"gui-h-full gui-w-full gui-absolute gui-structure-container-element\">\n\n\t<div [columns]=\"columns\" [source]=\"source\"\n\t\t gui-structure-content>\n\t</div>\n\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
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
    StructureContainerComponent.prototype.styleModifier;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.elRef;
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
    StructureContainerComponent.prototype.structureWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureVerticalFormationWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.sourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.compositionCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.compositionWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.formationWarehouse;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sTUFBTSxFQUdOLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR2xGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDekcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDOUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDNUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JB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QW1EO2dCQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUF0Q0EsaUJBQWlCO1lBRWpCLFVBQVU7WUFFVixNQUFNO1lBZUUsV0FBVztZQUNYLDBCQUEwQjtZQUMxQixrQkFBa0I7WUFRbEIsbUNBQW1DO1lBUG5DLGVBQWU7WUFDZix5QkFBeUI7WUFDekIsb0JBQW9CO1lBQ3BCLGtCQUFrQjtZQVhsQixjQUFjOzRDQXdEbEIsUUFBUSxZQUFJLE1BQU0sU0FBQyx3QkFBd0I7OztrQ0E3QjlDLFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFBaEQsMERBQ2dDOztJQUVoQyw4Q0FBOEM7O0lBRTlDLDZDQUErQjs7SUFFL0IsNkNBQWU7O0lBRWYsa0RBQStCOzs7OztJQUUvQiw2REFBZ0Q7Ozs7O0lBRWhELHlEQUEyQzs7Ozs7SUFFM0Msb0RBQThDOzs7OztJQUczQyw0Q0FBa0M7Ozs7O0lBQ2xDLDZDQUErQjs7Ozs7SUFDL0Isa0RBQXlDOzs7OztJQUN6Qyw4REFBb0U7Ozs7O0lBQ3BFLHlEQUF1RDs7Ozs7SUFDdkQsMEVBQXlGOzs7OztJQUN6RixzREFBaUQ7Ozs7O0lBQ2pELGdFQUFxRTs7Ozs7SUFDckUsMkRBQTJEOzs7OztJQUMzRCx5REFBdUQ7Ozs7O0lBQ3ZELHFEQUErQzs7Ozs7SUFDL0Msc0RBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEluamVjdCxcblx0Tmdab25lLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0T3B0aW9uYWwsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZXNpemVEZXRlY3RvciB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUtcGFyZW50LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvYXBpL3N0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0eWxlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9zdHlsZS9zdHlsZS1tb2RpZmllcic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29udGFpbmVyXScsXG5cdHRlbXBsYXRlVXJsOiBgLi9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnc291cmNlQ29sbGVjdGlvbicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRzb3VyY2VDb2xsZWN0aW9uUmVmOiBFbGVtZW50UmVmO1xuXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4gPSBbXTtcblxuXHRzb3VyY2U6IEFycmF5PEl0ZW1FbnRpdHk+ID0gW107XG5cblx0aGVpZ2h0OiBudW1iZXI7XG5cblx0cm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nO1xuXG5cdHByaXZhdGUgYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgc2Nyb2xsT2JzZXJ2YXRpb24kID0gbmV3IFN1YmplY3QoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0eWxlTW9kaWZpZXI6IFN0eWxlTW9kaWZpZXI7XG5cblx0Y29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG5nWm9uZTogTmdab25lLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2U6IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXI6IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25XYXJlaG91c2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlc2l6ZURldGVjdG9yOiBSZXNpemVEZXRlY3Rvcixcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQpIHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUGFyZW50OiBhbnkpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxSZWYpO1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllciA9IG5ldyBTdHlsZU1vZGlmaWVyKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdC5vbkNvbnRhaW5lckhlaWdodCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbnRhaW5lckhlaWdodDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGNvbnRhaW5lckhlaWdodClcblx0XHRcdFx0dGhpcy5zZXRDb250YWluZXJIZWlnaHQoY29udGFpbmVySGVpZ2h0KTtcblx0XHRcdH0pO1xuXG5cdFx0Y29tYmluZUxhdGVzdChcblx0XHRcdHRoaXMuc291cmNlV2FyZWhvdXNlLm9uRW50aXRpZXMoKSxcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25UZW1wbGF0ZUNvbHVtbnMoKVxuXHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChhcnI6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IGFyclswXSBhcyBBcnJheTxJdGVtRW50aXR5Pjtcblx0XHRcdFx0dGhpcy5jb2x1bW5zID0gYXJyWzFdIGFzIEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj47XG5cblx0XHRcdFx0dGhpcy5yZVJlbmRlcigpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25SZXNpemVXaWR0aCgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0c3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG5cblx0XHQvLyB0dXJuIG9uIHdoZW4gc3RydWN0dXJlIGlzIHJlYWR5XG5cdFx0aWYgKHRoaXMuc3RydWN0dXJlUGFyZW50KSB7XG5cdFx0XHR0aGlzLnJlc2l6ZURldGVjdG9yXG5cdFx0XHRcdC5vYnNlcnZlKHRoaXMuc3RydWN0dXJlUGFyZW50LmdldEVsZW1lbnRSZWYoKS5uYXRpdmVFbGVtZW50KVxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRmaWx0ZXIoKCkgPT4gdGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkKSxcblx0XHRcdFx0XHRtYXAoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBlbGVtZW50Lm9mZnNldFdpZHRoKSxcblx0XHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdFx0KVxuXHRcdFx0XHQuc3Vic2NyaWJlKCh3aWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbnRhaW5lcih3aWR0aCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Vcblx0XHRcdC5vbkNvbnRhaW5lcldpZHRoKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh3aWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRFbGVtZW50KHRoaXMuc291cmNlQ29sbGVjdGlvblJlZi5uYXRpdmVFbGVtZW50KS5zZXRXaWR0aCh3aWR0aCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdC5vblZlcnRpY2FsU2Nyb2xsRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0aWYgKGVuYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLmVuYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNhYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVdhcmVob3VzZVxuXHRcdFx0Lm9uU3RydWN0dXJlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKHN0cjogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBzdHIuaXNWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IHRvcE1hcmdpbiA9IHN0cnVjdHVyZS5nZXRUb3BNYXJnaW4oKSxcblx0XHRcdFx0XHRzb3VyY2VIZWlnaHQgPSBzdHJ1Y3R1cmUuZ2V0U291cmNlSGVpZ2h0KCk7XG5cblx0XHRcdFx0dGhpcy5zZXRTb3VyY2VIZWlnaHQodG9wTWFyZ2luLCBzb3VyY2VIZWlnaHQpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25TY3JvbGxCYXJQb3NpdGlvbigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc2Nyb2xsUG9zaXRpb246IG51bWJlcikgPT4ge1xuXG5cdFx0XHRcdHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxQb3NpdGlvbjtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLnJlc2l6ZURldGVjdG9yLmRlc3Ryb3kodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdHByaXZhdGUgc2V0Q29udGFpbmVySGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEhvc3QoKS5zZXRIZWlnaHQoaGVpZ2h0KTtcblx0fVxuXG5cdHByaXZhdGUgc2V0U291cmNlSGVpZ2h0KHRvcE1hcmdpbjogbnVtYmVyLCBzb3VyY2VIZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRFbGVtZW50KHRoaXMuc291cmNlQ29sbGVjdGlvblJlZi5uYXRpdmVFbGVtZW50KS5zZXRQYWRkaW5nVG9wKHRvcE1hcmdpbik7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQpLnNldEhlaWdodChzb3VyY2VIZWlnaHQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWNhbGN1bGF0ZUNvbnRhaW5lcih3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLnNldENvbnRhaW5lcldpZHRoKHdpZHRoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGVuYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMubmdab25lXG5cdFx0XHQucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXG5cdFx0XHRcdGZyb21FdmVudCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0Ly8gYXVkaXRUaW1lKDEwKSxcblx0XHRcdFx0XHRcdHRha2VVbnRpbCh0aGlzLnNjcm9sbE9ic2VydmF0aW9uJCksXG5cdFx0XHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHtcblxuXHRcdFx0XHRcdFx0Y29uc3Qgc2Nyb2xsVG9wID0gZXZlbnQudGFyZ2V0LnNjcm9sbFRvcDtcblxuXHRcdFx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxUb3ApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGRpc2FibGVTY3JvbGxPYnNlcnZhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLnNjcm9sbE9ic2VydmF0aW9uJC5uZXh0KCk7XG5cdFx0dGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQuY29tcGxldGUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29udGFpbmVyJztcblx0fVxuXG59XG4iXX0=