---
title: Behavioral Design Patterns - Command
description: Behavioral design pattern that allows you to transform a request in the form of an object containing all the information necessary to execute the request in the future.
img: /articles/images/design-pattern-command.webp
tags:
  - javascript
  - design-pattern
  - structural-patterns
published: true
---

The implementation of this pattern usually revolves around 4 main components:

- _command_, object that encapsulates information
- _client_, create the _command_ and pass it to the*invoker*
- _invoker_, receives the _command_ and invokes it on the _target_
- _target_ (or _receiver_), receives the _command_ and looks for the method to call based on the information contained in the _command_ itself

For example, let's say you need to create an application that interacts with an OS module to perform some functions on files, such as renaming, copying and merging 2 files. The simplest option could be to write the code and call the various methods directly, but if in the future the OS module we use were to change it would impact our logic. An alternative could be to implement the logics separately but with a common interface:

```javascript
class CopyFiles {
  execute() {
    const files = ['file1.txt', 'file2.txt'];
    const destination = '/my/files';
    files.forEach((fname) => OS.copyFile(fname, destination));
  }
}

class RenameFiles {
  execute() {
    const source_files = ['file1.txt', 'file2.txt'];
    const new_files = ['file_1.txt', 'file_2.txt'];
    source_files.forEach((fname, idx) => OS.renameFile(fname, new_files[idx]));
  }
}

class JoinFiles {
  execute() {
    OS.joinFiles('file_1.txt', 'file_2.txt', '/my/joined/files');
  }
}
```

and then use a function that performs the various functions

```javascript
function executor(cmd) {
  cmd.execute();
}

executor(new RenameFiles());
executor(new JoinFiles());
executor(new CopyFiles());
```
