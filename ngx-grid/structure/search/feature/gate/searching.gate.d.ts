import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { StructureId } from '../../../core/api/structure.id';
import { SearchConfig } from '../../core/api/search-config';
import { SearchEventRepository } from '../../core/api/search.event-repository';
import { SearchCommandInvoker } from '../../core/api/search.command-invoker';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare abstract class SearchingGate extends Gate implements OnChanges, OnInit {
    protected readonly structureId: StructureId;
    protected readonly searchEventRepository: SearchEventRepository;
    protected readonly searchCommandInvoker: SearchCommandInvoker;
    searching: boolean | SearchConfig;
    searchPhraseChanged: EventEmitter<string>;
    protected constructor(structureId: StructureId, searchEventRepository: SearchEventRepository, searchCommandInvoker: SearchCommandInvoker);
    ngOnChanges(changes: NgChanges<SearchingGate>): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchingGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SearchingGate, never, never, { "searching": "searching"; }, { "searchPhraseChanged": "searchPhraseChanged"; }, never>;
}
//# sourceMappingURL=searching.gate.d.ts.map