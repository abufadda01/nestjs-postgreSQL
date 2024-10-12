import { Module } from '@nestjs/common';
import { MetaOptionsService } from './meta-options.service';
import { MetaOptionsController } from './meta-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from 'src/tags/tag.entity';
import { MetaOption } from './meta-option.entity';

@Module({
  providers: [MetaOptionsService],
  controllers: [MetaOptionsController] ,
  imports : [TypeOrmModule.forFeature([MetaOption])]
})
export class MetaOptionsModule {}
