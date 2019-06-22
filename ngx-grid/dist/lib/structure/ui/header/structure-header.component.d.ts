import { ChangeDetectorRef, OnInit } from '@angular/core';
import { CellTemplateWithContext } from 'structure/domain/presentation/query/templates/cell-template-with-context';
import { PresentationQueryService } from 'structure/app/presentation/presentation-query.service';
import { SmartComponent } from 'util/cdk/smart-component';
export declare class StructureHeaderComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly presentationQueryService;
    headerColumns: Array<CellTemplateWithContext>;
    constructor(changeDetectorRef: ChangeDetectorRef, presentationQueryService: PresentationQueryService);
    ngOnInit(): void;
}
