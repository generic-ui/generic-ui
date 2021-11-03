import { ChangeDetectionStrategy, Component, Inject, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { structureParentComponent } from '../structure-parent-component';
import { StyleModifier } from '../../../../common/cdk/dom/style/style-modifier';
import { fromRxJsObservable, hermesDistinctUntilChanged, hermesFilter, hermesFromEvent, hermesMap, HermesSubject, hermesTakeUntil, toRxJsObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/structure.id";
import * as i2 from "../../../../composition/core/api/composition.id";
import * as i3 from "../../../core/api/structure.command-invoker";
import * as i4 from "../../core/api/structure.warehouse";
import * as i5 from "../../../vertical-formation/core/api/vertical-formation.warehouse";
import * as i6 from "../../../source/core/api/source.warehouse";
import * as i7 from "../../../../composition/core/api/composition.command-invoker";
import * as i8 from "../../../../composition/core/api/composition.warehouse";
import * as i9 from "../../../source/core/api/formation/formation.warehouse";
import * as i10 from "../../../../common/cdk/resize-detector/resize.detector";
import * as i11 from "../../../core/api/structure.initial-values-ready.archive";
import * as i12 from "./structure-content.component";
const _c0 = ["sourceCollection"];
const _c1 = ["gui-structure-container", ""];
export class StructureContainerComponent extends SmartComponent {
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
    ngOnInit() {
        this.hermesSubscribeWithoutRender(this.verticalFormationWarehouse.onContainerHeight(this.structureId), (containerHeight) => {
            this.setContainerHeight(containerHeight);
        });
        this.hermesSubscribe(fromRxJsObservable(toRxJsObservable(this.structureInitialValuesReadyArchive.once(this.structureId))
            .pipe(flatMap(() => {
            return combineLatest(toRxJsObservable(this.sourceWarehouse.onEntities(this.structureId)), toRxJsObservable(this.compositionWarehouse.onTemplateColumns(this.compositionId)));
        }))), (arr) => {
            this.source = arr[0];
            this.columns = arr[1];
        });
        this.hermesSubscribeWithoutRender(this.compositionWarehouse.onResizeWidth(this.compositionId), (enabled) => {
            this.autoResizeWidthEnabled = enabled;
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        // turn on when structure is ready
        if (this.structureParent) {
            this.hermesSubscribeWithoutRender(this.resizeDetector
                .on(this.structureParent.getElementRef().nativeElement)
                .pipe(hermesFilter(() => this.autoResizeWidthEnabled), hermesMap((size) => size.width), hermesDistinctUntilChanged()), (width) => {
                this.recalculateContainer(width);
            });
        }
        this.hermesSubscribeWithoutRender(this.compositionWarehouse.onContainerWidth(this.compositionId), (width) => {
            this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setWidth(width);
        });
        this.hermesSubscribeWithoutRender(this.verticalFormationWarehouse.onVerticalScrollEnabled(this.structureId), (enabled) => {
            if (enabled) {
                this.enableScrollObservation();
            }
            else {
                this.disableScrollObservation();
            }
        });
        this.hermesSubscribeWithoutRender(this.structureWarehouse
            .on(this.structureId)
            .pipe(hermesFilter((str) => {
            return str.isVerticalScrollEnabled();
        })), (structure) => {
            const topMargin = structure.getTopMargin(), sourceHeight = structure.getSourceHeight();
            this.setSourceHeight(topMargin, sourceHeight);
        });
        this.hermesSubscribeWithoutRender(this.verticalFormationWarehouse.onScrollBarPosition(this.structureId), (scrollPosition) => {
            this.elRef.nativeElement.scrollTop = scrollPosition;
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.resizeDetector.destroy(this.elRef.nativeElement);
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
    getSelectorName() {
        return 'gui-structure-container';
    }
}
StructureContainerComponent.ɵfac = function StructureContainerComponent_Factory(t) { return new (t || StructureContainerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.CompositionId), i0.ɵɵdirectiveInject(i3.StructureCommandInvoker), i0.ɵɵdirectiveInject(i4.StructureWarehouse), i0.ɵɵdirectiveInject(i5.VerticalFormationWarehouse), i0.ɵɵdirectiveInject(i6.SourceWarehouse), i0.ɵɵdirectiveInject(i7.CompositionCommandInvoker), i0.ɵɵdirectiveInject(i8.CompositionWarehouse), i0.ɵɵdirectiveInject(i9.FormationWarehouse), i0.ɵɵdirectiveInject(i10.ResizeDetector), i0.ɵɵdirectiveInject(i11.StructureInitialValuesReadyArchive), i0.ɵɵdirectiveInject(structureParentComponent, 8)); };
StructureContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureContainerComponent, selectors: [["div", "gui-structure-container", ""]], viewQuery: function StructureContainerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sourceCollectionRef = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c1, decls: 3, vars: 2, consts: [[1, "gui-h-full", "gui-w-full", "gui-absolute", "gui-structure-container-element"], ["sourceCollection", ""], ["gui-structure-content", "", 3, "columns", "source"]], template: function StructureContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelement(2, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("columns", ctx.columns)("source", ctx.source);
    } }, directives: [i12.StructureContentComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureContainerComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-container]',
                templateUrl: './structure-container.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.StructureId }, { type: i2.CompositionId }, { type: i3.StructureCommandInvoker }, { type: i4.StructureWarehouse }, { type: i5.VerticalFormationWarehouse }, { type: i6.SourceWarehouse }, { type: i7.CompositionCommandInvoker }, { type: i8.CompositionWarehouse }, { type: i9.FormationWarehouse }, { type: i10.ResizeDetector }, { type: i11.StructureInitialValuesReadyArchive }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [structureParentComponent]
            }] }]; }, { sourceCollectionRef: [{
            type: ViewChild,
            args: ['sourceCollection', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9jb250ZW50L3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsTUFBTSxFQUlOLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQVVsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUl6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDaEYsT0FBTyxFQUNOLGtCQUFrQixFQUNsQiwwQkFBMEIsRUFDMUIsWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQVk1QixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsY0FBYztJQW1COUQsWUFBWSxpQkFBb0MsRUFDNUIsS0FBaUIsRUFDakIsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLGFBQTRCLEVBQzVCLHVCQUFnRCxF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O2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7c0JBa0NJLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsd0JBQXdCO3dCQTlCL0MsbUJBQW1CO2tCQURsQixTQUFTO21CQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbmplY3QsXG5cdE5nWm9uZSxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdE9wdGlvbmFsLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmxhdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUtcGFyZW50LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3R5bGVNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZG9tL3N0eWxlL3N0eWxlLW1vZGlmaWVyJztcbmltcG9ydCB7XG5cdGZyb21SeEpzT2JzZXJ2YWJsZSxcblx0aGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQsXG5cdGhlcm1lc0ZpbHRlcixcblx0aGVybWVzRnJvbUV2ZW50LFxuXHRoZXJtZXNNYXAsXG5cdEhlcm1lc1N1YmplY3QsXG5cdGhlcm1lc1Rha2VVbnRpbCxcblx0dG9SeEpzT2JzZXJ2YWJsZVxufSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pbml0aWFsLXZhbHVlcy1yZWFkeS5hcmNoaXZlJztcbmltcG9ydCB7IE9ic2VydmVkU2l6ZSwgUmVzaXplRGV0ZWN0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUuZGV0ZWN0b3InO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jb250YWluZXJdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdzb3VyY2VDb2xsZWN0aW9uJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdHNvdXJjZUNvbGxlY3Rpb25SZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPiA9IFtdO1xuXG5cdHNvdXJjZTogQXJyYXk8SXRlbUVudGl0eT4gPSBbXTtcblxuXHRoZWlnaHQ6IG51bWJlcjtcblxuXHRyb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3Jpbmc7XG5cblx0cHJpdmF0ZSBhdXRvUmVzaXplV2lkdGhFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBzY3JvbGxPYnNlcnZhdGlvbiQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3R5bGVNb2RpZmllcjogU3R5bGVNb2RpZmllcjtcblxuXHRjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbmdab25lOiBOZ1pvbmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVdhcmVob3VzZTogU3RydWN0dXJlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlOiBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZXNpemVEZXRlY3RvcjogUmVzaXplRGV0ZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZTogU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSxcblx0XHRcdFx0QE9wdGlvbmFsKCkgQEluamVjdChzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQpIHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUGFyZW50OiBhbnkpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxSZWYpO1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllciA9IG5ldyBTdHlsZU1vZGlmaWVyKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Uub25Db250YWluZXJIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoY29udGFpbmVySGVpZ2h0OiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zZXRDb250YWluZXJIZWlnaHQoY29udGFpbmVySGVpZ2h0KTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHRmcm9tUnhKc09ic2VydmFibGUoXG5cdFx0XHRcdHRvUnhKc09ic2VydmFibGUodGhpcy5zdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlLm9uY2UodGhpcy5zdHJ1Y3R1cmVJZCkpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRmbGF0TWFwKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNvbWJpbmVMYXRlc3QoXG5cdFx0XHRcdFx0XHRcdFx0dG9SeEpzT2JzZXJ2YWJsZSh0aGlzLnNvdXJjZVdhcmVob3VzZS5vbkVudGl0aWVzKHRoaXMuc3RydWN0dXJlSWQpKSxcblx0XHRcdFx0XHRcdFx0XHR0b1J4SnNPYnNlcnZhYmxlKHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25UZW1wbGF0ZUNvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKSlcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdChhcnI6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IGFyclswXSBhcyBBcnJheTxJdGVtRW50aXR5Pjtcblx0XHRcdFx0dGhpcy5jb2x1bW5zID0gYXJyWzFdIGFzIEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj47XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25SZXNpemVXaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpLFxuXHRcdFx0KGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0c3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG5cblx0XHQvLyB0dXJuIG9uIHdoZW4gc3RydWN0dXJlIGlzIHJlYWR5XG5cdFx0aWYgKHRoaXMuc3RydWN0dXJlUGFyZW50KSB7XG5cblx0XHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdFx0dGhpcy5yZXNpemVEZXRlY3RvclxuXHRcdFx0XHRcdC5vbih0aGlzLnN0cnVjdHVyZVBhcmVudC5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudClcblx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdGhlcm1lc0ZpbHRlcigoKSA9PiB0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQpLFxuXHRcdFx0XHRcdFx0aGVybWVzTWFwKChzaXplOiBPYnNlcnZlZFNpemUpID0+IHNpemUud2lkdGgpLFxuXHRcdFx0XHRcdFx0aGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdCh3aWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbnRhaW5lcih3aWR0aCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZS5vbkNvbnRhaW5lcldpZHRoKHRoaXMuY29tcG9zaXRpb25JZCksXG5cdFx0XHQod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0RWxlbWVudCh0aGlzLnNvdXJjZUNvbGxlY3Rpb25SZWYubmF0aXZlRWxlbWVudCkuc2V0V2lkdGgod2lkdGgpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLm9uVmVydGljYWxTY3JvbGxFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0aWYgKGVuYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLmVuYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNhYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVdhcmVob3VzZVxuXHRcdFx0XHQub24odGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0aGVybWVzRmlsdGVyKChzdHI6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBzdHIuaXNWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpLFxuXHRcdFx0KHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IHRvcE1hcmdpbiA9IHN0cnVjdHVyZS5nZXRUb3BNYXJnaW4oKSxcblx0XHRcdFx0XHRzb3VyY2VIZWlnaHQgPSBzdHJ1Y3R1cmUuZ2V0U291cmNlSGVpZ2h0KCk7XG5cblx0XHRcdFx0dGhpcy5zZXRTb3VyY2VIZWlnaHQodG9wTWFyZ2luLCBzb3VyY2VIZWlnaHQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLm9uU2Nyb2xsQmFyUG9zaXRpb24odGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoc2Nyb2xsUG9zaXRpb246IG51bWJlcikgPT4ge1xuXG5cdFx0XHRcdHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxQb3NpdGlvbjtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLnJlc2l6ZURldGVjdG9yLmRlc3Ryb3kodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdHByaXZhdGUgc2V0Q29udGFpbmVySGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEhvc3QoKS5zZXRIZWlnaHQoaGVpZ2h0KTtcblx0fVxuXG5cdHByaXZhdGUgc2V0U291cmNlSGVpZ2h0KHRvcE1hcmdpbjogbnVtYmVyLCBzb3VyY2VIZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRFbGVtZW50KHRoaXMuc291cmNlQ29sbGVjdGlvblJlZi5uYXRpdmVFbGVtZW50KS5zZXRQYWRkaW5nVG9wKHRvcE1hcmdpbik7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5zb3VyY2VDb2xsZWN0aW9uUmVmLm5hdGl2ZUVsZW1lbnQpLnNldEhlaWdodChzb3VyY2VIZWlnaHQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWNhbGN1bGF0ZUNvbnRhaW5lcih3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuYXV0b1Jlc2l6ZVdpZHRoRW5hYmxlZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLnNldENvbnRhaW5lcldpZHRoKHdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZW5hYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5uZ1pvbmVcblx0XHRcdC5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cblx0XHRcdFx0aGVybWVzRnJvbUV2ZW50KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRoZXJtZXNUYWtlVW50aWwodGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHtcblxuXHRcdFx0XHRcdFx0Y29uc3Qgc2Nyb2xsVG9wID0gZXZlbnQudGFyZ2V0LnNjcm9sbFRvcDtcblxuXHRcdFx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxUb3AsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGRpc2FibGVTY3JvbGxPYnNlcnZhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLnNjcm9sbE9ic2VydmF0aW9uJC5uZXh0KCk7XG5cdFx0dGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQuY29tcGxldGUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29udGFpbmVyJztcblx0fVxuXG59XG4iLCI8ZGl2ICNzb3VyY2VDb2xsZWN0aW9uXG5cdCBjbGFzcz1cImd1aS1oLWZ1bGwgZ3VpLXctZnVsbCBndWktYWJzb2x1dGUgZ3VpLXN0cnVjdHVyZS1jb250YWluZXItZWxlbWVudFwiPlxuXG5cdDxkaXYgW2NvbHVtbnNdPVwiY29sdW1uc1wiIFtzb3VyY2VdPVwic291cmNlXCJcblx0XHQgZ3VpLXN0cnVjdHVyZS1jb250ZW50PlxuXHQ8L2Rpdj5cblxuPC9kaXY+XG4iXX0=