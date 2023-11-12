import { ChangeDetectionStrategy, Component, ElementRef, Inject, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import { structureParentComponent } from '../../structure/parent/structure-parent-component';
import { StyleModifier } from '../../../../../feature/common/component/src/dom/style/style-modifier';
import { fromRxJsObservable, hermesDistinctUntilChanged, hermesFilter, hermesFromEvent, hermesMap, HermesSubject, hermesTakeUntil, toRxJsObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/composition/src/api/global/composition.id";
import * as i3 from "../../../../../core/structure/structure-core/src/api/structure.publisher";
import * as i4 from "../../../../../core/structure/structure-core/src/api/structure.warehouse";
import * as i5 from "../../../../../core/structure/vertical-formation/src/api/vertical-formation.warehouse";
import * as i6 from "../../../../../core/structure/source/src/api/source.warehouse";
import * as i7 from "../../../../../core/composition/src/api/composition.publisher";
import * as i8 from "../../../../../core/composition/src/api/composition.warehouse";
import * as i9 from "../../../../../feature/composition/src/column/composition.template-warehouse";
import * as i10 from "../../../../../core/structure/formation/src/api/formation.warehouse";
import * as i11 from "../../../../../feature/common/cdk/src/resize-detector/resize.detector";
import * as i12 from "../../../../../core/structure/structure-core/src/api/ready/structure.initial-values-ready.archive";
import * as i13 from "../structure-content.component";
export class StructureContainerComponent extends SmartComponent {
    elRef;
    ngZone;
    structureId;
    compositionId;
    structureCommandService;
    structureWarehouse;
    verticalFormationWarehouse;
    sourceWarehouse;
    compositionCommandInvoker;
    compositionWarehouse;
    compositionTemplateWarehouse;
    formationWarehouse;
    resizeDetector;
    structureInitialValuesReadyArchive;
    structureParent;
    sourceCollectionRef;
    columns = [];
    source = [];
    height;
    rowColoring;
    autoResizeWidthEnabled = false;
    scrollObservation$ = new HermesSubject();
    styleModifier;
    constructor(changeDetectorRef, elRef, ngZone, structureId, compositionId, structureCommandService, structureWarehouse, verticalFormationWarehouse, sourceWarehouse, compositionCommandInvoker, compositionWarehouse, compositionTemplateWarehouse, formationWarehouse, resizeDetector, structureInitialValuesReadyArchive, structureParent) {
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
        this.compositionTemplateWarehouse = compositionTemplateWarehouse;
        this.formationWarehouse = formationWarehouse;
        this.resizeDetector = resizeDetector;
        this.structureInitialValuesReadyArchive = structureInitialValuesReadyArchive;
        this.structureParent = structureParent;
        this.styleModifier = new StyleModifier(this.elRef.nativeElement);
    }
    ngOnInit() {
        this.subscribeWithoutRender(this.verticalFormationWarehouse.onContainerHeight(this.structureId), (containerHeight) => {
            this.setContainerHeight(containerHeight);
        });
        this.subscribe(fromRxJsObservable(toRxJsObservable(this.structureInitialValuesReadyArchive.once(this.structureId))
            .pipe(flatMap(() => {
            return combineLatest(toRxJsObservable(this.sourceWarehouse.onItems(this.structureId)), toRxJsObservable(this.compositionTemplateWarehouse.onTemplateCols(this.compositionId)));
        }))), (arr) => {
            this.source = arr[0];
            this.columns = arr[1];
        });
        this.subscribeWithoutRender(this.compositionWarehouse.onResizeWidth(this.compositionId), (enabled) => {
            this.autoResizeWidthEnabled = enabled;
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        // turn on when structure is ready
        if (this.structureParent) {
            this.subscribeWithoutRender(this.resizeDetector
                .on(this.structureParent.getElementRef().nativeElement)
                .pipe(hermesFilter(() => this.autoResizeWidthEnabled), hermesMap((size) => size.width), hermesDistinctUntilChanged()), (width) => {
                this.recalculateContainer(width);
            });
        }
        this.subscribeWithoutRender(this.compositionWarehouse.onContainerWidth(this.compositionId), (width) => {
            this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setWidth(width);
        });
        this.subscribeWithoutRender(this.verticalFormationWarehouse.onEnabled(this.structureId), (enabled) => {
            if (enabled) {
                this.enableScrollObservation();
            }
            else {
                this.disableScrollObservation();
            }
        });
        this.subscribeWithoutRender(this.structureWarehouse
            .on(this.structureId)
            .pipe(hermesFilter((str) => {
            return str.isVerticalScrollEnabled();
        })), (structure) => {
            const topMargin = structure.getTopMargin(), sourceHeight = structure.getSourceHeight();
            this.setSourceHeight(topMargin, sourceHeight);
        });
        this.subscribeWithoutRender(this.verticalFormationWarehouse.onScrollBarPosition(this.structureId), (scrollPosition) => {
            this.elRef.nativeElement.scrollTop = scrollPosition;
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.resizeDetector.destroy(this.elRef.nativeElement);
    }
    getSelectorName() {
        return 'gui-structure-container';
    }
    setContainerHeight(height) {
        this.height = height;
        this.styleModifier.getHost().setHeight(height);
    }
    setSourceHeight(topMargin, sourceHeight) {
        this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setPaddingTop(topMargin);
        this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setHeight(sourceHeight);
    }
    recalculateContainer(width) {
        if (this.autoResizeWidthEnabled) {
            this.compositionCommandInvoker.setContainerWidth(width, this.compositionId);
        }
    }
    enableScrollObservation() {
        this.ngZone
            .runOutsideAngular(() => {
            hermesFromEvent(this.elRef.nativeElement, 'scroll')
                .pipe(hermesTakeUntil(this.scrollObservation$))
                .subscribe((event) => {
                const scrollTop = event.target.scrollTop;
                this.structureCommandService.setScrollPosition(scrollTop, this.structureId);
            });
        });
    }
    disableScrollObservation() {
        this.scrollObservation$.next();
        this.scrollObservation$.complete();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureContainerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.StructureId }, { token: i2.CompositionId }, { token: i3.StructurePublisher }, { token: i4.StructureWarehouse }, { token: i5.VerticalFormationWarehouse }, { token: i6.SourceWarehouse }, { token: i7.CompositionPublisher }, { token: i8.CompositionWarehouse }, { token: i9.CompositionTemplateWarehouse }, { token: i10.FormationWarehouse }, { token: i11.ResizeDetector }, { token: i12.StructureInitialValuesReadyArchive }, { token: structureParentComponent, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: StructureContainerComponent, selector: "div[gui-structure-container]", viewQueries: [{ propertyName: "sourceCollectionRef", first: true, predicate: ["sourceCollection"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<div #sourceCollection\n\t class=\"gui-h-full gui-w-full gui-absolute gui-structure-container-element\">\n\n\t<div [columns]=\"columns\" [source]=\"source\"\n\t\t gui-structure-content>\n\t</div>\n\n</div>\n", dependencies: [{ kind: "component", type: i13.StructureContentComponent, selector: "div[gui-structure-content]", inputs: ["source", "columns"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-container]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div #sourceCollection\n\t class=\"gui-h-full gui-w-full gui-absolute gui-structure-container-element\">\n\n\t<div [columns]=\"columns\" [source]=\"source\"\n\t\t gui-structure-content>\n\t</div>\n\n</div>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.StructureId }, { type: i2.CompositionId }, { type: i3.StructurePublisher }, { type: i4.StructureWarehouse }, { type: i5.VerticalFormationWarehouse }, { type: i6.SourceWarehouse }, { type: i7.CompositionPublisher }, { type: i8.CompositionWarehouse }, { type: i9.CompositionTemplateWarehouse }, { type: i10.FormationWarehouse }, { type: i11.ResizeDetector }, { type: i12.StructureInitialValuesReadyArchive }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [structureParentComponent]
                }] }], propDecorators: { sourceCollectionRef: [{
                type: ViewChild,
                args: ['sourceCollection', { read: ElementRef, static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2NvbnRlbnQvY29udGFpbmVyL3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9jb250ZW50L2NvbnRhaW5lci9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBSU4sUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBUzdGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBSTdGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNyRyxPQUFPLEVBQ04sa0JBQWtCLEVBQ2xCLDBCQUEwQixFQUMxQixZQUFZLEVBQ1osZUFBZSxFQUNmLFNBQVMsRUFDVCxhQUFhLEVBQ2IsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjNUIsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGNBQWM7SUFvQjFDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNB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TFcsMkJBQTJCLGloQkFrQ2hCLHdCQUF3QjsyRkFsQ25DLDJCQUEyQix3S0FFQSxVQUFVLG9EQ3hEbEQsaU5BUUE7OzJGRDhDYSwyQkFBMkI7a0JBTnZDLFNBQVM7K0JBQ0MsOEJBQThCLG1CQUV2Qix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzswQkFvQ2pDLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsd0JBQXdCO3lDQS9CdEMsbUJBQW1CO3NCQUQzQixTQUFTO3VCQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEluamVjdCxcblx0Tmdab25lLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0T3B0aW9uYWwsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmbGF0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3N0cnVjdHVyZS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvY29tcG9zaXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS9wYXJlbnQvc3RydWN0dXJlLXBhcmVudC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2FwaS9pdGVtL2l0ZW0nO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc3JjL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0eWxlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL2RvbS9zdHlsZS9zdHlsZS1tb2RpZmllcic7XG5pbXBvcnQge1xuXHRmcm9tUnhKc09ic2VydmFibGUsXG5cdGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkLFxuXHRoZXJtZXNGaWx0ZXIsXG5cdGhlcm1lc0Zyb21FdmVudCxcblx0aGVybWVzTWFwLFxuXHRIZXJtZXNTdWJqZWN0LFxuXHRoZXJtZXNUYWtlVW50aWwsXG5cdHRvUnhKc09ic2VydmFibGVcbn0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3JlYWR5L3N0cnVjdHVyZS5pbml0aWFsLXZhbHVlcy1yZWFkeS5hcmNoaXZlJztcbmltcG9ydCB7IE9ic2VydmVkU2l6ZSwgUmVzaXplRGV0ZWN0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvc3JjL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUuZGV0ZWN0b3InO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BY2Nlc3Nvck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21wb3NpdGlvbi9zcmMvY29sdW1uL2NvbXBvc2l0aW9uLmFjY2Vzc29yLm1vZGVsJztcbmltcG9ydCB7IENvbXBvc2l0aW9uVGVtcGxhdGVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vY29tcG9zaXRpb24udGVtcGxhdGUtd2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jb250YWluZXJdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdzb3VyY2VDb2xsZWN0aW9uJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdHJlYWRvbmx5IHNvdXJjZUNvbGxlY3Rpb25SZWY/OiBFbGVtZW50UmVmO1xuXG5cdGNvbHVtbnM6IEFycmF5PENvbXBvc2l0aW9uQWNjZXNzb3JNb2RlbD4gPSBbXTtcblxuXHRzb3VyY2U6IEFycmF5PEl0ZW0+ID0gW107XG5cblx0aGVpZ2h0OiBudW1iZXI7XG5cblx0cm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nO1xuXG5cdHByaXZhdGUgYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgc2Nyb2xsT2JzZXJ2YXRpb24kID0gbmV3IEhlcm1lc1N1YmplY3Q8dm9pZD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0eWxlTW9kaWZpZXI6IFN0eWxlTW9kaWZpZXI7XG5cblx0Y29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG5nWm9uZTogTmdab25lLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb25XYXJlaG91c2U6IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXI6IENvbXBvc2l0aW9uUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvblRlbXBsYXRlV2FyZWhvdXNlOiBDb21wb3NpdGlvblRlbXBsYXRlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlc2l6ZURldGVjdG9yOiBSZXNpemVEZXRlY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlOiBTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlLFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCkgcHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVQYXJlbnQ6IGFueSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbFJlZik7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyID0gbmV3IFN0eWxlTW9kaWZpZXIodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZS5vbkNvbnRhaW5lckhlaWdodCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChjb250YWluZXJIZWlnaHQ6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnNldENvbnRhaW5lckhlaWdodChjb250YWluZXJIZWlnaHQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdGZyb21SeEpzT2JzZXJ2YWJsZShcblx0XHRcdFx0dG9SeEpzT2JzZXJ2YWJsZSh0aGlzLnN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUub25jZSh0aGlzLnN0cnVjdHVyZUlkKSlcblx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdGZsYXRNYXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY29tYmluZUxhdGVzdChcblx0XHRcdFx0XHRcdFx0XHR0b1J4SnNPYnNlcnZhYmxlKHRoaXMuc291cmNlV2FyZWhvdXNlLm9uSXRlbXModGhpcy5zdHJ1Y3R1cmVJZCkpLFxuXHRcdFx0XHRcdFx0XHRcdHRvUnhKc09ic2VydmFibGUodGhpcy5jb21wb3NpdGlvblRlbXBsYXRlV2FyZWhvdXNlLm9uVGVtcGxhdGVDb2xzKHRoaXMuY29tcG9zaXRpb25JZCkpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHQoYXJyOiBBcnJheTxhbnk+KSA9PiB7XG5cblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBhcnJbMF0gYXMgQXJyYXk8SXRlbT47XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGFyclsxXSBhcyBBcnJheTxDb21wb3NpdGlvbkFjY2Vzc29yTW9kZWw+O1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlLm9uUmVzaXplV2lkdGgodGhpcy5jb21wb3NpdGlvbklkKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXG5cdFx0Ly8gdHVybiBvbiB3aGVuIHN0cnVjdHVyZSBpcyByZWFkeVxuXHRcdGlmICh0aGlzLnN0cnVjdHVyZVBhcmVudCkge1xuXG5cdFx0XHR0aGlzLnN1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHRcdHRoaXMucmVzaXplRGV0ZWN0b3Jcblx0XHRcdFx0XHQub24odGhpcy5zdHJ1Y3R1cmVQYXJlbnQuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRoZXJtZXNGaWx0ZXIoKCkgPT4gdGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkKSxcblx0XHRcdFx0XHRcdGhlcm1lc01hcCgoc2l6ZTogT2JzZXJ2ZWRTaXplKSA9PiBzaXplLndpZHRoKSxcblx0XHRcdFx0XHRcdGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHQod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVjYWxjdWxhdGVDb250YWluZXIod2lkdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25Db250YWluZXJXaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpLFxuXHRcdFx0KHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQpLnNldFdpZHRoKHdpZHRoKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZS5vbkVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHRpZiAoZW5hYmxlZCkge1xuXHRcdFx0XHRcdHRoaXMuZW5hYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmRpc2FibGVTY3JvbGxPYnNlcnZhdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMuc3RydWN0dXJlV2FyZWhvdXNlXG5cdFx0XHRcdC5vbih0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRoZXJtZXNGaWx0ZXIoKHN0cjogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHN0ci5pc1ZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCksXG5cdFx0XHQoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgdG9wTWFyZ2luID0gc3RydWN0dXJlLmdldFRvcE1hcmdpbigpLFxuXHRcdFx0XHRcdHNvdXJjZUhlaWdodCA9IHN0cnVjdHVyZS5nZXRTb3VyY2VIZWlnaHQoKTtcblxuXHRcdFx0XHR0aGlzLnNldFNvdXJjZUhlaWdodCh0b3BNYXJnaW4sIHNvdXJjZUhlaWdodCk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Uub25TY3JvbGxCYXJQb3NpdGlvbih0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChzY3JvbGxQb3NpdGlvbjogbnVtYmVyKSA9PiB7XG5cblx0XHRcdFx0dGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFBvc2l0aW9uO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHRcdHRoaXMucmVzaXplRGV0ZWN0b3IuZGVzdHJveSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb250YWluZXInO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRDb250YWluZXJIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0SG9zdCgpLnNldEhlaWdodChoZWlnaHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRTb3VyY2VIZWlnaHQodG9wTWFyZ2luOiBudW1iZXIsIHNvdXJjZUhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQpLnNldFBhZGRpbmdUb3AodG9wTWFyZ2luKTtcblx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0RWxlbWVudCh0aGlzLnNvdXJjZUNvbGxlY3Rpb25SZWYubmF0aXZlRWxlbWVudCkuc2V0SGVpZ2h0KHNvdXJjZUhlaWdodCk7XG5cdH1cblxuXHRwcml2YXRlIHJlY2FsY3VsYXRlQ29udGFpbmVyKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBlbmFibGVTY3JvbGxPYnNlcnZhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLm5nWm9uZVxuXHRcdFx0LnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblxuXHRcdFx0XHRoZXJtZXNGcm9tRXZlbnQodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJylcblx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdGhlcm1lc1Rha2VVbnRpbCh0aGlzLnNjcm9sbE9ic2VydmF0aW9uJClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBzY3JvbGxUb3AgPSBldmVudC50YXJnZXQuc2Nyb2xsVG9wO1xuXG5cdFx0XHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFNjcm9sbFBvc2l0aW9uKHNjcm9sbFRvcCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZGlzYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kLm5leHQoKTtcblx0XHR0aGlzLnNjcm9sbE9ic2VydmF0aW9uJC5jb21wbGV0ZSgpO1xuXHR9XG5cbn1cbiIsIjxkaXYgI3NvdXJjZUNvbGxlY3Rpb25cblx0IGNsYXNzPVwiZ3VpLWgtZnVsbCBndWktdy1mdWxsIGd1aS1hYnNvbHV0ZSBndWktc3RydWN0dXJlLWNvbnRhaW5lci1lbGVtZW50XCI+XG5cblx0PGRpdiBbY29sdW1uc109XCJjb2x1bW5zXCIgW3NvdXJjZV09XCJzb3VyY2VcIlxuXHRcdCBndWktc3RydWN0dXJlLWNvbnRlbnQ+XG5cdDwvZGl2PlxuXG48L2Rpdj5cbiJdfQ==