# Rollback Plan

## Rollback using backup branch
```bash
git checkout main
git reset --hard backup/prod-before-release-YYYYMMDD
git push origin main --force
```

Use force push only when rollback is confirmed.

## Rollback using tag
```bash
git checkout main
git reset --hard prod-backup-YYYYMMDD-HHMM
git push origin main --force
```

## After Rollback
- Check Vercel deployment
- Check Render deployment
- Check frontend
- Check API health
- Check contact/career form
