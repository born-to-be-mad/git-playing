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
