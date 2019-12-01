import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
export declare class StructureSearchComponent extends SmartComponent implements OnInit {
    private formBuilder;
    searchForm: FormGroup;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    private observeChanges;
}
