# portofino-cli
Command-line utilities for [ManyDesigns Portofino](https://github.com/ManyDesigns/Portofino), built with
[portofino-client](https://github.com/alessiostalla/portofino-client).

This is a work in progress. 

## Installation

This is a Node application. Once we have Node on our system, we can install it with

```
npm install -g portofino-cli
```

The command will then be available under the name "portofino".

## Usage

Invoking the cli without any arguments prints some help text that we can use to discover commands.

```
$ portofino
Usage: portofino [options] [command]

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  new             create a new Portofino project
  help [command]  display help for command
```

## History

This is a rewrite of [the original portofino-cli](https://github.com/alessiostalla/portofino-cli-lisp) written in
Common Lisp, in order to reuse all the logic implemented in [portofino-client](https://github.com/alessiostalla/portofino-client).
