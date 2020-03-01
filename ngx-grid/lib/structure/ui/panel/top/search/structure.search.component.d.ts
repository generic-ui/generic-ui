import { AfterViewInit, ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureCommandService } from '../../../../ui-api/structure/structure-command.service';
import { StructureReadModelService } from '../../../../ui-api/structure/structure-read-model.service';
import { StructureSearchPlaceholderArchive } from '../../../../domain/structure/read/searching/placeholder/structure.search-placeholder.archive';
import { StructureSearchPhraseRepository } from '../../../../domain/structure/read/searching/phrase/structure.search-phrase.repository';
import { StructureId } from '../../../../domain/structure-id';
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
    constructor(formBuilder: FormBuilder, renderer2: Renderer2, changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structureCommandService: StructureCommandService, structureReadModelService: StructureReadModelService, structureSearchPhraseRepository: StructureSearchPhraseRepository, structureSearchPlaceholderArchive: StructureSearchPlaceholderArchive);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private observeChanges;
}
