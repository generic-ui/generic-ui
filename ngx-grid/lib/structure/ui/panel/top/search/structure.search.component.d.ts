import { AfterViewInit, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureCommandService } from '../../../../ui-api/structure/structure-command.service';
import { StructureReadModelService } from '../../../../ui-api/structure/structure-read-model.service';
export declare class StructureSearchComponent extends SmartComponent implements OnInit, AfterViewInit {
    private formBuilder;
    private renderer2;
    private structureCommandService;
    private structureReadModelService;
    formRef: ElementRef;
    searchForm: FormGroup;
    constructor(formBuilder: FormBuilder, renderer2: Renderer2, structureCommandService: StructureCommandService, structureReadModelService: StructureReadModelService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private observeChanges;
}
