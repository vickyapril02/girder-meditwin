# girder-meditwin-plugin

MediTwin (TWIN SCD STEMI) customizations for Girder 5:

- Landing page and logged-in dashboard, French/English switcher
- "Twin scd STEMI" tab title and MediTwin favicon, green banner
- Folder Quick Navigation, sort menu and natural sort (same as girder-mds-plugin)
- DICOM viewer and DICOM metadata search, ported from girder-dicom-viewer
  (do not install `girder-dicom-viewer` alongside this plugin)

## Local setup

```bash
# 1. Girder 5 environment
cd ~/Desktop/girder5/meditwin-g5
python3.10 -m venv venv
source venv/bin/activate
pip install "girder==5.0.12" "girder-oidc==0.5.0" gunicorn celery redis

# 2. Build this plugin (dist/ is committed, so servers don't need npm)
cd ~/Desktop/girder5/girder-meditwin-plugin/girder_meditwin/web_client
npm install
npm run build

# 3. Install plugin
cd ~/Desktop/girder5/girder-meditwin-plugin
pip install -e .

# 4. Start (MongoDB + Redis must be running)
~/Desktop/girder5/meditwin-g5/start.sh
```

Open http://127.0.0.1:8082. Restart Girder after each build: the plugin file URL hash is computed at startup.
