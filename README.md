# Playing with git

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
