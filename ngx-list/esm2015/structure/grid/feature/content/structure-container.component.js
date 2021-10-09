/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, NgZone, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../core/api/structure.id';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { StructureWarehouse } from '../../core/api/structure.warehouse';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { CompositionCommandInvoker } from '../../../../composition/core/api/composition.command-invoker';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { FormationWarehouse } from '../../../source/core/api/formation/formation.warehouse';
import { structureParentComponent } from '../structure-parent-component';
import { VerticalFormationWarehouse } from '../../../vertical-formation/core/api/vertical-formation.warehouse';
import { StyleModifier } from '../../../../common/cdk/dom/style/style-modifier';
import { fromRxJsObservable, hermesDistinctUntilChanged, hermesFilter, hermesFromEvent, hermesMap, HermesSubject, hermesTakeUntil, toRxJsObservable } from '@generic-ui/hermes';
import { StructureInitialValuesReadyArchive } from '../../../core/api/structure.initial-values-ready.archive';
import { ResizeDetector } from '../../../../common/cdk/resize-detector/resize.detector';
import { CompositionId } from '../../../../composition/core/domain/composition.id';
export class StructureContainerComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elRef
     * @param {?} ngZone
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} structureCommandService
     * @param {?} structureWarehouse
     * @param {?} verticalFormationWarehouse
     * @param {?} sourceWarehouse
     * @param {?} compositionCommandInvoker
     * @param {?} compositionWarehouse
     * @param {?} formationWarehouse
     * @param {?} resizeDetector
     * @param {?} structureInitialValuesReadyArchive
     * @param {?} structureParent
     */
    constructor(changeDetectorRef, elRef, ngZone, structureId, compositionId, structureCommandService, structureWarehouse, verticalFormationWarehouse, sourceWarehouse, compositionCommandInvoker, compositionWarehouse, formationWarehouse, resizeDetector, structureInitialValuesReadyArchive, structureParent) {
        super(changeDetectorRef, elRef);
        this.elRef = elRef;
        this.ngZone = ngZone;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.structureCommandService = structureCommandService;
        this.structureWarehouse = structureWarehouse;
        this.verticalFormationWarehouse = verticalFormationWarehouse;
        this.sourceWarehouse = sourceWarehouse;
        this.compositionCommandInvoker = compositionCommandInvoker;
        this.compositionWarehouse = compositionWarehouse;
        this.formationWarehouse = formationWarehouse;
        this.resizeDetector = resizeDetector;
        this.structureInitialValuesReadyArchive = structureInitialValuesReadyArchive;
        this.structureParent = structureParent;
        this.columns = [];
        this.source = [];
        this.autoResizeWidthEnabled = false;
        this.scrollObservation$ = new HermesSubject();
        this.styleModifier = new StyleModifier(this.elRef.nativeElement);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hermesSubscribeWithoutRender(this.verticalFormationWarehouse.onContainerHeight(this.structureId), (/**
         * @param {?} containerHeight
         * @return {?}
         */
        (containerHeight) => {
            this.setContainerHeight(containerHeight);
        }));
        this.hermesSubscribe(fromRxJsObservable(toRxJsObservable(this.structureInitialValuesReadyArchive.once(this.structureId))
            .pipe(flatMap((/**
         * @return {?}
         */
        () => {
            return combineLatest(toRxJsObservable(this.sourceWarehouse.onEntities(this.structureId)), toRxJsObservable(this.compositionWarehouse.onTemplateColumns(this.compositionId)));
        })))), (/**
         * @param {?} arr
         * @return {?}
         */
        (arr) => {
            this.source = (/** @type {?} */ (arr[0]));
            this.columns = (/** @type {?} */ (arr[1]));
        }));
        this.hermesSubscribeWithoutRender(this.compositionWarehouse.onResizeWidth(this.compositionId), (/**
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
            this.hermesSubscribeWithoutRender(this.resizeDetector
                .on(this.structureParent.getElementRef().nativeElement)
                .pipe(hermesFilter((/**
             * @return {?}
             */
            () => this.autoResizeWidthEnabled)), hermesMap((/**
             * @param {?} size
             * @return {?}
             */
            (size) => size.width)), hermesDistinctUntilChanged()), (/**
             * @param {?} width
             * @return {?}
             */
            (width) => {
                this.recalculateContainer(width);
            }));
        }
        this.hermesSubscribeWithoutRender(this.compositionWarehouse.onContainerWidth(this.compositionId), (/**
         * @param {?} width
         * @return {?}
         */
        (width) => {
            this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setWidth(width);
        }));
        this.hermesSubscribeWithoutRender(this.verticalFormationWarehouse.onVerticalScrollEnabled(this.structureId), (/**
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
        this.hermesSubscribeWithoutRender(this.structureWarehouse
            .on(this.structureId)
            .pipe(hermesFilter((/**
         * @param {?} str
         * @return {?}
         */
        (str) => {
            return str.isVerticalScrollEnabled();
        }))), (/**
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
        this.hermesSubscribeWithoutRender(this.verticalFormationWarehouse.onScrollBarPosition(this.structureId), (/**
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
            this.compositionCommandInvoker.setContainerWidth(width, this.compositionId);
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
            hermesFromEvent(this.elRef.nativeElement, 'scroll')
                .pipe(hermesTakeUntil(this.scrollObservation$), this.takeUntil())
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                /** @type {?} */
                const scrollTop = event.target.scrollTop;
                this.structureCommandService.setScrollPosition(scrollTop, this.structureId);
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
    { type: CompositionId },
    { type: StructureCommandInvoker },
    { type: StructureWarehouse },
    { type: VerticalFormationWarehouse },
    { type: SourceWarehouse },
    { type: CompositionCommandInvoker },
    { type: CompositionWarehouse },
    { type: FormationWarehouse },
    { type: ResizeDetector },
    { type: StructureInitialValuesReadyArchive },
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
    StructureContainerComponent.prototype.compositionId;
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
    StructureContainerComponent.prototype.verticalFormationWarehouse;
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
    StructureContainerComponent.prototype.structureInitialValuesReadyArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureParent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sTUFBTSxFQUdOLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUdsRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzVGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FB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QUN2RSxzREFBaUQ7Ozs7O0lBQ2pELGdFQUFxRTs7Ozs7SUFDckUsMkRBQTJEOzs7OztJQUMzRCx5REFBdUQ7Ozs7O0lBQ3ZELHFEQUErQzs7Ozs7SUFDL0MseUVBQXVGOzs7OztJQUN2RixzREFBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5qZWN0LFxuXHROZ1pvbmUsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRPcHRpb25hbCxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZsYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgc3RydWN0dXJlUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vc3RydWN0dXJlLXBhcmVudC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0eWxlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9zdHlsZS9zdHlsZS1tb2RpZmllcic7XG5pbXBvcnQge1xuXHRmcm9tUnhKc09ic2VydmFibGUsXG5cdGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkLFxuXHRoZXJtZXNGaWx0ZXIsXG5cdGhlcm1lc0Zyb21FdmVudCxcblx0aGVybWVzTWFwLFxuXHRIZXJtZXNTdWJqZWN0LFxuXHRoZXJtZXNUYWtlVW50aWwsXG5cdHRvUnhKc09ic2VydmFibGVcbn0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaW5pdGlhbC12YWx1ZXMtcmVhZHkuYXJjaGl2ZSc7XG5pbXBvcnQgeyBPYnNlcnZlZFNpemUsIFJlc2l6ZURldGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZXNpemUtZGV0ZWN0b3IvcmVzaXplLmRldGVjdG9yJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29udGFpbmVyXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnc291cmNlQ29sbGVjdGlvbicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRzb3VyY2VDb2xsZWN0aW9uUmVmOiBFbGVtZW50UmVmO1xuXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4gPSBbXTtcblxuXHRzb3VyY2U6IEFycmF5PEl0ZW1FbnRpdHk+ID0gW107XG5cblx0aGVpZ2h0OiBudW1iZXI7XG5cblx0cm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nO1xuXG5cdHByaXZhdGUgYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgc2Nyb2xsT2JzZXJ2YXRpb24kID0gbmV3IEhlcm1lc1N1YmplY3Q8dm9pZD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0eWxlTW9kaWZpZXI6IFN0eWxlTW9kaWZpZXI7XG5cblx0Y29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG5nWm9uZTogTmdab25lLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZTogVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Db21tYW5kSW52b2tlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVzaXplRGV0ZWN0b3I6IFJlc2l6ZURldGVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmU6IFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUsXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3Qoc3RydWN0dXJlUGFyZW50Q29tcG9uZW50KSBwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVBhcmVudDogYW55KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsUmVmKTtcblx0XHR0aGlzLnN0eWxlTW9kaWZpZXIgPSBuZXcgU3R5bGVNb2RpZmllcih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLm9uQ29udGFpbmVySGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGNvbnRhaW5lckhlaWdodDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2V0Q29udGFpbmVySGVpZ2h0KGNvbnRhaW5lckhlaWdodCk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0ZnJvbVJ4SnNPYnNlcnZhYmxlKFxuXHRcdFx0XHR0b1J4SnNPYnNlcnZhYmxlKHRoaXMuc3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZS5vbmNlKHRoaXMuc3RydWN0dXJlSWQpKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0ZmxhdE1hcCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBjb21iaW5lTGF0ZXN0KFxuXHRcdFx0XHRcdFx0XHRcdHRvUnhKc09ic2VydmFibGUodGhpcy5zb3VyY2VXYXJlaG91c2Uub25FbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKSksXG5cdFx0XHRcdFx0XHRcdFx0dG9SeEpzT2JzZXJ2YWJsZSh0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlLm9uVGVtcGxhdGVDb2x1bW5zKHRoaXMuY29tcG9zaXRpb25JZCkpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHQoYXJyOiBBcnJheTxhbnk+KSA9PiB7XG5cblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBhcnJbMF0gYXMgQXJyYXk8SXRlbUVudGl0eT47XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGFyclsxXSBhcyBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+O1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlLm9uUmVzaXplV2lkdGgodGhpcy5jb21wb3NpdGlvbklkKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXG5cdFx0Ly8gdHVybiBvbiB3aGVuIHN0cnVjdHVyZSBpcyByZWFkeVxuXHRcdGlmICh0aGlzLnN0cnVjdHVyZVBhcmVudCkge1xuXG5cdFx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHRcdHRoaXMucmVzaXplRGV0ZWN0b3Jcblx0XHRcdFx0XHQub24odGhpcy5zdHJ1Y3R1cmVQYXJlbnQuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRoZXJtZXNGaWx0ZXIoKCkgPT4gdGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkKSxcblx0XHRcdFx0XHRcdGhlcm1lc01hcCgoc2l6ZTogT2JzZXJ2ZWRTaXplKSA9PiBzaXplLndpZHRoKSxcblx0XHRcdFx0XHRcdGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHQod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVjYWxjdWxhdGVDb250YWluZXIod2lkdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25Db250YWluZXJXaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpLFxuXHRcdFx0KHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQpLnNldFdpZHRoKHdpZHRoKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZS5vblZlcnRpY2FsU2Nyb2xsRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdGlmIChlbmFibGVkKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmFibGVTY3JvbGxPYnNlcnZhdGlvbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuZGlzYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVXYXJlaG91c2Vcblx0XHRcdFx0Lm9uKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGhlcm1lc0ZpbHRlcigoc3RyOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc3RyLmlzVmVydGljYWxTY3JvbGxFbmFibGVkKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KSxcblx0XHRcdChzdHJ1Y3R1cmU6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblxuXHRcdFx0XHRjb25zdCB0b3BNYXJnaW4gPSBzdHJ1Y3R1cmUuZ2V0VG9wTWFyZ2luKCksXG5cdFx0XHRcdFx0c291cmNlSGVpZ2h0ID0gc3RydWN0dXJlLmdldFNvdXJjZUhlaWdodCgpO1xuXG5cdFx0XHRcdHRoaXMuc2V0U291cmNlSGVpZ2h0KHRvcE1hcmdpbiwgc291cmNlSGVpZ2h0KTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZS5vblNjcm9sbEJhclBvc2l0aW9uKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHNjcm9sbFBvc2l0aW9uOiBudW1iZXIpID0+IHtcblxuXHRcdFx0XHR0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsUG9zaXRpb247XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdFx0dGhpcy5yZXNpemVEZXRlY3Rvci5kZXN0cm95KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRwcml2YXRlIHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRIb3N0KCkuc2V0SGVpZ2h0KGhlaWdodCk7XG5cdH1cblxuXHRwcml2YXRlIHNldFNvdXJjZUhlaWdodCh0b3BNYXJnaW46IG51bWJlciwgc291cmNlSGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0RWxlbWVudCh0aGlzLnNvdXJjZUNvbGxlY3Rpb25SZWYubmF0aXZlRWxlbWVudCkuc2V0UGFkZGluZ1RvcCh0b3BNYXJnaW4pO1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRFbGVtZW50KHRoaXMuc291cmNlQ29sbGVjdGlvblJlZi5uYXRpdmVFbGVtZW50KS5zZXRIZWlnaHQoc291cmNlSGVpZ2h0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVjYWxjdWxhdGVDb250YWluZXIod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmICh0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5zZXRDb250YWluZXJXaWR0aCh3aWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGVuYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMubmdab25lXG5cdFx0XHQucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXG5cdFx0XHRcdGhlcm1lc0Zyb21FdmVudCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0aGVybWVzVGFrZVVudGlsKHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kKSxcblx0XHRcdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBzY3JvbGxUb3AgPSBldmVudC50YXJnZXQuc2Nyb2xsVG9wO1xuXG5cdFx0XHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFNjcm9sbFBvc2l0aW9uKHNjcm9sbFRvcCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZGlzYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kLm5leHQoKTtcblx0XHR0aGlzLnNjcm9sbE9ic2VydmF0aW9uJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb250YWluZXInO1xuXHR9XG5cbn1cbiJdfQ==