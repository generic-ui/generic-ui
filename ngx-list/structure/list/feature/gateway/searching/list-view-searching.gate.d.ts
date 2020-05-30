import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
import { SearchConfig } from '../../../../search/domain-api/search-config';
import { SearchCommandDispatcher } from '../../../../search/domain-api/search.command-dispatcher';
import { SearchEventRepository } from '../../../../search/domain-api/search.event-repository';
export declare class ListViewSearchingGate extends Gate implements OnChanges, OnInit {
    private readonly structureId;
    private readonly searchCommandDispatcher;
    private readonly searchEventRepository;
    searching: SearchConfig;
    searchPhraseChanged: EventEmitter<string>;
    constructor(structureId: StructureId, searchCommandDispatcher: SearchCommandDispatcher, searchEventRepository: SearchEventRepository);
    ngOnChanges(simpleChanges: SimpleChanges): void;
    ngOnInit(): void;
}
