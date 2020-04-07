import { AfterViewInit, ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureCommandDispatcher } from '../../../../ui-api/structure/structure.command-dispatcher';
import { StructureReadModelWarehouse } from '../../../../ui-api/structure/structure.read-model-warehouse';
import { StructureSearchPlaceholderArchive } from '../../../../read/structure/searching/placeholder/structure.search-placeholder.archive';
import { StructureSearchPhraseRepository } from '../../../../read/structure/searching/phrase/structure.search-phrase.repository';
import { StructureId } from '../../../../domain/structure.id';
export declare class StructureSearchComponent extends SmartComponent implements OnInit, AfterViewInit {
    private formBuilder;
    private renderer2;
    private changeDetectorRef;
    private structureId;
    private structureCommandService;
    private structureReadModelService;
    private structureSearchPhraseRepository;
    private structureSearchPlaceholderArchive;
    private static readonly FORM_SEARCH_NAME;
    formRef: ElementRef;
    searchForm: FormGroup;
    placeholder: string;
    constructor(formBuilder: FormBuilder, renderer2: Renderer2, changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structureCommandService: StructureCommandDispatcher, structureReadModelService: StructureReadModelWarehouse, structureSearchPhraseRepository: StructureSearchPhraseRepository, structureSearchPlaceholderArchive: StructureSearchPlaceholderArchive);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private observeChanges;
}
