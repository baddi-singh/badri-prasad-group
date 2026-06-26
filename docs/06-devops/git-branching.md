# Git Branching Strategy

## Branches
- `main` = production
- `staging` = staging/testing
- `dev` = daily development
- `feature/*` = feature work
- `backup/*` = production backups

## Flow
```txt
dev → staging → main
```

## Before Production Merge
```bash
git checkout main
git pull origin main
git checkout -b backup/prod-before-release-YYYYMMDD
git push origin backup/prod-before-release-YYYYMMDD
git checkout main
git tag prod-backup-YYYYMMDD-HHMM
git push origin --tags
git merge staging
git push origin main
```
