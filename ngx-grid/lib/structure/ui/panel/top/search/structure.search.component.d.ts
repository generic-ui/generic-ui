import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureCommandService } from '../../../../ui-api/structure/structure-command.service';
export declare class StructureSearchComponent extends SmartComponent implements OnInit {
    private formBuilder;
    private structureCommandService;
    searchForm: FormGroup;
    constructor(formBuilder: FormBuilder, structureCommandService: StructureCommandService);
    ngOnInit(): void;
    private observeChanges;
}
