    cd .\frontend\
    npm i
    npm buld
    cd ..\backend\
    << you can user this python venv >>
    pip install -r requirements.txt
    python run app.py

You can copy projects and start **app.py**. All templates are built inside.

For dev Vue you not need keys in "pages" segment, comment out these lines **vue.config.js** => "filename"

All routing in **"npm run serve"** its your keys in **"pages"** in **vue.config.js** (home, facts, something)
