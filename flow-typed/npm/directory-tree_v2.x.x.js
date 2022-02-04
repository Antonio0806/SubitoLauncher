// flow-typed signature: 7bc26b765bde2a2a8eafacd56aa5bf57
// flow-typed version: c6154227d1/directory-tree_v2.x.x/flow_>=v0.104.x

declare module 'directory-tree' {
  import typeof pathType from 'path';

  declare type directoryNodeType = {|
    path: string,
    name: string,
    size: number,
    type: 'directory' | 'file',
    extension?: string,
    children?: $ReadOnlyArray<directoryNodeType>,
  |};

  declare type directoryTreeType = (
    path: string,
    options?: {|
      normalizePath?: (path: string) => boolean,
      exclude?: (RegExp | $ReadOnlyArray<RegExp>),
      extensions?: RegExp,
    |} | null,
    onEachFile?: (
      item: {|
        path: string,
        name: string,
      |},
      PATH: pathType,
    ) => void,
  ) => directoryNodeType;

  declare module.exports: directoryTreeType;
}
