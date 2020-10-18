import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StructureId } from '../../../../core/api/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
import { SearchConfig } from '../../../../search/core/api/search-config';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
import { SearchEventRepository } from '../../../../search/core/api/search.event-repository';
export declare class ListViewSearchingGate extends Gate implements OnChanges, OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly searchCommandDispatcher;
    private readonly searchEventRepository;
    searching: SearchConfig;
    searchPhraseChanged: EventEmitter<string>;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, searchCommandDispatcher: SearchCommandInvoker, searchEventRepository: SearchEventRepository);
    ngOnChanges(simpleChanges: SimpleChanges): void;
    ngOnInit(): void;
}
