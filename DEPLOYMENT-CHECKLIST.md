# Production Deployment Checklist

## Release Details
- Release name:
- Version:
- Date:
- Branch:
- Commit ID:
- Backup branch:
- Backup tag:
- Approved by: Badri Prasad

## Before Release
- [ ] `git status` is clean
- [ ] Latest `staging` is tested
- [ ] Production backup branch created
- [ ] Production backup tag created
- [ ] No `.env` files committed
- [ ] No secrets in frontend code
- [ ] Backend health endpoint working
- [ ] Frontend build successful
- [ ] Contact form tested
- [ ] Careers form tested
- [ ] Admin login tested
- [ ] Mobile responsive check done
- [ ] Rollback command ready

## Deployment Flow
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

## After Release
- [ ] Vercel production deployed
- [ ] Render production deployed
- [ ] Production API health checked
- [ ] Production frontend checked
- [ ] Contact form checked in production
- [ ] Logs checked
