import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SmartComponent } from '../../../common/src/cdk/component/lib/src/smart-component';
import { StructureId } from '../../../../core/structure/structure-core/src/api/global/structure.id';
import { SearchPublisher } from '../../../../core/structure/search/src/api/search.publisher';
import { SearchWarehouse } from '../../../../core/structure/search/src/api/search.warehouse';
import { HermesSubscription } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class SearchComponent extends SmartComponent implements OnInit {
    private readonly formBuilder;
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly searchCommandDispatcher;
    private readonly searchWarehouse;
    private static readonly FORM_SEARCH_NAME;
    readonly formRef?: ElementRef;
    searchForm: FormGroup;
    placeholder: string;
    searchingEnabled: boolean;
    searchInputSubscription: HermesSubscription;
    constructor(formBuilder: FormBuilder, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, searchCommandDispatcher: SearchPublisher, searchWarehouse: SearchWarehouse);
    ngOnInit(): void;
    clear(): void;
    protected getSelectorName(): string;
    private observeChanges;
    private stopObserveChanges;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchComponent, "div[gui-search-bar]", never, {}, {}, never, never, false, never>;
}
