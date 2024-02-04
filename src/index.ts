#!/usr/bin/env node

import { program } from 'commander';
import { version} from "../package.json";

program.version(version);

program.command('new')
    .description("create a new Portofino project")
    .action(options => {
        console.info("TODO not yet implemented");
    });

program.parse();
