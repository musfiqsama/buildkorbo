# BuildKorbo? v16

Bangladesh-focused business and startup validator.

## New in v16
- Uses v14 as the base UI
- Adds district intelligence for the districts requested by the user
- Adds the full public/private university list supplied by the user
- Treats universities as customer context and nearby surrounding demand, not as an inside-campus stall assumption
- Treats BUP as a top university
- Adds execution context (home area, market/roadside, office/worker area, university surrounding area)

## Run locally
```bash
cd bd-startup-validator-v16
python -m http.server 5500
```
Open http://localhost:5500
