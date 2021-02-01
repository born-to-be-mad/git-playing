# PLAYING WITH GIT

## Best practices

- _Commit often_. When we commit often, we keep our commits small and share our work more frequently. That makes it easier to avoid large merge conflicts.
- _Don’t commit unfinished work_. Break your feature’s code into small but working chunks. Once you finish a chunk, test it, then commit it. This work method prevents the potential conflicts created by merging large bodies of code all at once. At the same time, it ensures we don’t commit small snippets of non-working code.
- _Before you commit, test_. Don’t commit something until you’ve tested it. Shared code that isn’t tested can create a lot of headaches and lost time for an entire team.
- _Commit related changes_. Make your commits small, and confine them to directly related changes. When we fix two separate bugs, they should take the form of two different commits.
- _Write clear commit messages_. Include a single-sentence summary of your changes. After that, explain the motivation for the change, and how it’s different from the previous version.
- _Use branches_. Branches are an excellent tool to avoid confusion and keep different lines of development separate.
- _Agree on your workflow_. Your team should agree on a workflow before the project starts. Whether that’s based on topic-branches, git-flow, long-running branches, or some other workflow will depend on the project.

## Git Checkout Remote Branch Definition

_Use case: we need to access a branch that’s not stored locally and we don’t want to create a new local branch or version. => we want to work on the remote version._

`Git checkout remote branch` is a way for a programmer to access the work of a colleague or collaborator for the purpose of review and collaboration. There is no actual command called “git checkout remote branch.” It’s just a way of referring to the action of checking out a remote branch.

- A branch is a separate line of development. New branches are created with the `git branch` command. When a programmer fixes a bug or adds a new feature, he or she creates a new branch to make the changes in a safe way, without threatening existing, working code.

### Possible ways:

- Standart way
  -> `git fetch origin` - fetch the remote branches
  -> `git checkout -b branchXXX origin/branchXXX` - checkout the branch you want
  or do the same by `git branch branchXXX origin/branchXXX`
  -> `git fetch origin` - fetch the remote branches

- Modern way(with newer versions) if we have no local branch with the same name - simply checking out a remote branch called branchXXX:

```
 git fetch
 git checkout branchXXX
```

- Modern way(with newer versions) if we HAVE local branch with the same name

```
 git fetch origin
 git checkout –track origin/branchXXX
```

- If we’ve got multiple remotes, we need to use: `Git checkout -b xyz /xyz`

## Git Merge

Documentation `git-merge` - Join two or more development histories together
![Git Merge Details](../master/readme_data/git_merge.png)

```
git merge [-n] [--stat] [--no-commit] [--squash] [--[no-]edit]
	[--no-verify] [-s <strategy>] [-X <strategy-option>] [-S[<keyid>]]
	[--[no-]allow-unrelated-histories]
	[--[no-]rerere-autoupdate] [-m <msg>] [-F <file>] [<commit>…​]
git merge (--continue | --abort | --quit)
```

## Git Rebase

Documentation `git-rebase` - Forward-port local commits to the updated upstream head”

![Git Rebase Details](../master/readme_data/git_rebase.png)

![Git Rebase in Real](../master/readme_data/git_rebase_reality.png)

```
git rebase [-i | --interactive] [<options>] [--exec <cmd>]
	[--onto <newbase> | --keep-base] [<upstream> [<branch>]]
git rebase [-i | --interactive] [<options>] [--exec <cmd>] [--onto <newbase>]
	--root [<branch>]
git rebase (--continue | --skip | --abort | --quit | --edit-todo | --show-current-patch)
```

## Hints

### Merge the master branch into the feature branch:

```
git checkout feature
git merge master
```

This is equal to a one-liner: `git merge feature master`

### Advanced merging the feature branch into the master branch:

```
git checkout master
git pull
git checkout feature
git pull
git rebase -i master
git checkout master
git merge feature
```

### One commit in the master branch to keep the commit history as clean as possible:

```
git checkout master
git pull origin master
git merge --squash feature
git commit
git push origin master
```

# GIT errors and solutions
## The “fatal: refusing to merge unrelated histories"
![Error:refusing to merge unrelated histories](../master/readme_data/git_error-refusing_to_merge_unrelated_histories.png)
The “fatal: refusing to merge unrelated histories” Git error occurs when two unrelated projects are merged (i.e., projects that are not aware of each other’s existence and have mismatching commit histories).
The error is resolved by toggling the allow-unrelated-histories switch. After a git pull or git merge command, add the following tag:
`git pull origin master --allow-unrelated-histories`

# Working with symlinks
* Symbolic links(symlinks) are much more than a simple shortcut. 
* create symlink
** Windows `mklink symlink TARGET_FILE`(file) or `mklink /D symlink TARGET_DIRECTORY`
** Linux `ln -s /path/referenced/by/symlink symlink`
* add symlink to git `git add symlink`  
* see information about `git ls-files -s symlink`
```shell
120000 fa8d8cc8aeedbf66fa6b1a431cc6eba8821aba0b 0       symlink
```
In any case, the data referenced by the symlinks is not stored in storage(!). 
It contains only some meta about symlink, f.e. check `\.git\objects\fa` to see just two small files there.
* extract from the repository.
  Depending on the `core.symlink` setting,  
** if `core.symlinks = false` then symlinks are extracted from the repository as small simple files containing the link text.
** if `core.symlinks = true` then the correct symlinks are extracted from the repository. In this case it is stored as "BLOB"
* If the target file/directory referenced by the symlink is deleted, than it will not affect the Git-managed symlink in any way. 
  It will be just invalid dangling link. It can be removed or changed by linking to something valid if needed. 
