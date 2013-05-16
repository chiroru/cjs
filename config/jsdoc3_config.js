{
  "tags": {
    "allowUnknownTags": true
  },
  "source": {
    "include": [ "./js" ],
    "includePattern": ".+\\.js(doc)?$",
    "excludePattern": "(^|\\/|\\\\)_"
  },
  "plugins": [],
  "templates": {
      "cleverLinks": false,
      "monospaceLinks": false
  },
  "opts": {
    "encoding": "utf8",
    "destination": "./target/doc",
    "recurse": true,
    "tutorials": "",
    "query": "value",
    "private": true,
    "lenient": true,
    "version": false,
    "test": false,
    "help": false,
    "verbose": true,
    "match": "value",
    "nocolor": true
  },
  "jsVersion": 180
}
