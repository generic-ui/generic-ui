import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-id';
import { PagingConfig } from '../../paging-config';
export declare class SetPagingCommand extends Command {
    readonly structureId: StructureId;
    readonly payload: PagingConfig;
    constructor(structureId: StructureId, payload: PagingConfig);
}
