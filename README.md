# VSCode extension for MIR

The extension is intended for better development experience with [MIR](https://github.com/vnmakarov/mir) (the JIT compiler) textual format.

## Features
Currently, syntax highlighting of the MIR textual format is supported.

<img src="https://user-images.githubusercontent.com/23738781/135221989-622bbe6d-53fa-40d0-a88d-06ed0ff352d6.png" width="60%" />

## Under Development
A debugger for MIR textual format is under development. Currently almost finished the first steps for a debugger -- Breakpoints. Stepping in/over/out. Stack trace. Interactively viewing variables in each stack frame. Hovering inspection of variables. Basic REPL (`s var val` for setting and `p type val` for printing variables).

Due to the MIR simplification process, currently breakpoints cannot be set on FMOV/DMOV/LDMOV instructions (and perhaps more) with constant operands. `type` in printing command can be any MIR type (but not currently BLK or RBLK), or `str` for printing a pointer as `char*` c-style string. Currently the debugger will not catch exceptions. For working on with the debugger, some verbose info, as well as `stderr`, is printed into `mir-intp-dap.log` under the VS Code installation folder.

The debugging support has not released yet. To run the debugger you currently need to pull down the plugin directory and the debugger repository.

For the plugin repository (this one), after pulling you need to run
```sh
yarn install
yarn build
```
then hit F5 in a host VS Code process to start a development VS Code process. Before you start debugging MIR, you need to pull the debugger repository from https://github.com/eliphatfs/mir/tree/dap-intp and build with the provided VS Code task or manually
```sh
gcc -g -Og mir.c ./dap/cJSON.c -o mir-intp-dap.exe -DMIR_DAP -DMIR_DIRECT_DISPATCH -I. -Lpthread
```
then paste the `mir-intp-dap.exe` into `bin` folder of the plugin directory (if the folder does not exist just create a new one).

Example video:
<img src="https://user-images.githubusercontent.com/23738781/136159110-7684463b-2d22-4b13-925b-4dbbd225e427.gif" width="60%" />

## Requirements

No requirements yet.

## Extension Settings

Nothing configurable yet.

## Release Notes

See [change logs](./CHANGELOG.md).

## Contributing

Currently the project is still in early alpha stage of developing. Contributions are welcome! If you any question about using the plugin feel free to start an issue.
