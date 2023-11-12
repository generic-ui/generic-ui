import { ElementRef } from '@angular/core';
import { PagingModel } from '../../../../core/structure/paging/src/api/model/paging.model';
import { PagingWarehouse } from '../../../../core/structure/paging/src/api/paging.warehouse';
import { PagingPublisher } from '../../../../core/structure/paging/src/api/paging.publisher';
import { SourceWarehouse } from '../../../../core/structure/source/src/api/source.warehouse';
import { PagingDisplayModeArchive } from './mode/paging-display-mode.archive';
import { PagingPosition } from './paging-position';
import { CssClassModifier } from '../../common/src/css-class/css-class.modifier';
import { NgChanges } from '../../../common/component/src/ng-changes';
import { StructureId } from '../../../../core/structure/structure-core/src/api/global/structure.id';
import { HermesObservable } from '@generic-ui/hermes';
import { GuiComponent } from '../../../common/component';
import * as i0 from "@angular/core";
export interface PagingComponentState {
    alternativeDisplay: boolean;
    sourceSize: number;
    paging: PagingModel;
    isPagingVisible: boolean;
}
export declare class PagingComponent extends GuiComponent {
    private readonly elRef;
    private readonly cssClassModifier;
    private readonly structureId;
    private readonly pagingWarehouse;
    private readonly pagingCommandInvoker;
    private readonly sourceWarehouse;
    private readonly pagingDisplayModeArchive;
    position: PagingPosition;
    minimal?: boolean;
    private readonly state;
    readonly state$: HermesObservable<any>;
    constructor(elRef: ElementRef, cssClassModifier: CssClassModifier, structureId: StructureId, pagingWarehouse: PagingWarehouse, pagingCommandInvoker: PagingPublisher, sourceWarehouse: SourceWarehouse, pagingDisplayModeArchive: PagingDisplayModeArchive);
    ngOnChanges(changes: NgChanges<PagingComponent>): void;
    changePageSize(pageSize: number): void;
    nextPage(sourceSize: number): void;
    prevPage(): void;
    protected getSelectorName(): string;
    private selectIsPagingVisible;
    private mapIsPagingVisible;
    private selectIsAdvancedPagingEnabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PagingComponent, "div[gui-paging][position]", never, { "position": { "alias": "position"; "required": false; }; "minimal": { "alias": "minimal"; "required": false; }; }, {}, never, never, false, never>;
}
