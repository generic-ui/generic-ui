import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Gate } from '../../../../common/src/cdk/component/lib/src/gate';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { SearchConfig } from '../../../../../core/structure/search/src/api/config/search-config';
import { SearchEventRepository } from '../../../../../core/structure/search/src/api/search.event-repository';
import { SearchPublisher } from '../../../../../core/structure/search/src/api/search.publisher';
import { NgChanges } from '../../../../common/src/cdk/component/lib/src/ng-changes';
import * as i0 from "@angular/core";
export declare abstract class SearchingGate extends Gate implements OnChanges, OnInit {
    protected readonly structureId: StructureId;
    protected readonly searchEventRepository: SearchEventRepository;
    protected readonly searchCommandInvoker: SearchPublisher;
    searching: boolean | SearchConfig;
    searchPhraseChanged: EventEmitter<string>;
    protected constructor(structureId: StructureId, searchEventRepository: SearchEventRepository, searchCommandInvoker: SearchPublisher);
    ngOnChanges(changes: NgChanges<SearchingGate>): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchingGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SearchingGate, never, never, { "searching": "searching"; }, { "searchPhraseChanged": "searchPhraseChanged"; }, never, never, false, never>;
}
